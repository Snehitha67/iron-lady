import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Lady ASCEND AI | AI-Powered Career Transformation",
  description:
    "Revolutionary AI-powered platform for women leaders. Get personalized career guidance, leadership coaching, and strategic program recommendations powered by advanced AI.",
  keywords: [
    "Iron Lady",
    "leadership",
    "women empowerment",
    "AI coaching",
    "career transformation",
    "Business War Tactics",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
