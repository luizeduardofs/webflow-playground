export interface BadgeProps {
  text: string;
  variant: "light" | "dark";
}

export const Badge = ({ text, variant }: BadgeProps) => (
  <span
    style={{
      backgroundColor: variant === "light" ? "#eee" : "#000",
      borderRadius: "1em",
      color: variant === "light" ? "#000" : "#fff",
      display: "inline-block",
      fontSize: "14px",
      lineHeight: 2,
      padding: "0 1em",
    }}
  >
    {text}
  </span>
);
