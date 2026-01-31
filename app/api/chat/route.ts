import { NextRequest, NextResponse } from "next/server";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

export async function POST(req: NextRequest) {
  try {
    const { message, context } = (await req.json()) as {
      message: string;
      context?: ChatMessage[];
    };

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // System prompt for Iron Lady coaching
    const systemPrompt = `You are an expert Iron Lady leadership coach and career strategist. Iron Lady is a transformative leadership platform that has empowered 78,000+ women professionals worldwide using Business War Tactics based on Art of War principles.

IRON LADY PROGRAMS:
1. Leadership Masterclass (₹99, 2-day intensive): Gateway program covering Goal Setting, BHAG creation, Business War Tactics intro, community access
2. Leadership Essentials Program (LEP, 12 weeks): For emerging leaders - Powerful Request, Living in the NOW, Navigate Office Politics, Shameless Pitching
3. 100 Board Members Program (6 months): For mid-senior leaders - Strategic Leadership, Corporate Entrepreneurship, Board-Ready Skills, Executive Presence
4. 1 Crore Club (Ongoing elite): For senior leaders & entrepreneurs - 7-8 figure income strategies, elite networking, business scaling, legacy building

CORE PRINCIPLES (Business War Tactics):
- Powerful Request: Master asking for what you deserve (promotions, salary, resources)
- Living in the NOW: Stay present, focused on current goals vs dwelling on past
- Shameless Pitching: Pitch yourself and ideas with zero apologizing
- Crucibles of Leadership: Transform challenges into growth opportunities
- Maximising: Optimize every resource, relationship, and opportunity
- Corporate Entrepreneurship: Think like owner within organization
- BHAG (Big Hairy Audacious Goals): Set breakthrough goals, not incremental

SUCCESS STORIES:
- Neha Singh Chauhan: Co-founder, closed ₹30L deals using Powerful Request
- Dr. Premalatha PV: Established Malligi Motherhood unit using Crucibles principle
- Sheeja Abraham: Significant salary hike after 20 years using Powerful Request
- 78,000+ women transformed across IT, Healthcare, Finance, Manufacturing, Education

YOUR ROLE:
- Provide personalized, actionable coaching
- Reference specific Iron Lady principles
- Recommend appropriate programs based on career stage
- Use empowering, confident language
- Give 2-4 sentence responses unless deeper analysis requested
- Focus on: leadership development, negotiation, office politics, strategic thinking, BHAG achievement

Be supportive but direct. Empower women to be unapologetically ambitious.`;

    // Build messages for OpenAI chat completion API
    const messages: { role: string; content: string }[] = [
      { role: "system", content: systemPrompt },
      // include previous context if provided
      ...(Array.isArray(context)
        ? context.map((m) => ({ role: m.role, content: m.content }))
        : []),
      { role: "user", content: message },
    ];

    const OPENAI_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_KEY) {
      // graceful fallback for local dev without key
      const fallback = `Iron Lady Coach: Thanks for your message. I don't have access to an AI service in this environment. Based on the prompt, a short coaching response would be: Focus on clearly stating your goal, justify the ask with impact, and propose a concrete next step (timeframe, resources).`;
      return NextResponse.json({ message: fallback, success: true });
    }

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`OpenAI error: ${resp.status} ${text}`);
    }

    const data = await resp.json();
    const aiMessage =
      data?.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({ message: aiMessage, success: true });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to get AI response",
        details: String(error?.message || error),
      },
      { status: 500 }
    );
  }
}
