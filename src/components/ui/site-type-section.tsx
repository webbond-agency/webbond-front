interface SiteTypeSectionProps {
  title: string;
  description: string;
  image: string;
  list: string[];
  buttonText: string;
  variant: "left" | "right";
}

export default function SiteTypeSection({
  title,
  description,
  image,
  list,
  buttonText,
  variant = "left",
}: SiteTypeSectionProps) {
  return <section></section>;
}
