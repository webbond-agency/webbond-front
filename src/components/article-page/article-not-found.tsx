import Container from "../ui/container";

interface ArticleNotFoundProps {
  title: string;
  description: string;
}

export default function ArticleNotFound({
  title,
  description,
}: ArticleNotFoundProps) {
  return (
    <section className=" pt-24 pb-16 min-h-dvh">
      <Container className="flex flex-col justify-center items-center">
        <h1 className="pt-50 lg:pt-80 font-manrope text-3xl font-light uppercase text-white text-center">
          {title}
        </h1>
        <p className="mt-3 font-montserrat text-sm font-light text-white text-center">
          {description}
        </p>
      </Container>
    </section>
  );
}
