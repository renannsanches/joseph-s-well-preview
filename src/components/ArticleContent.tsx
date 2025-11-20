import bundleImage from "@/assets/bundle-1.webp";

const ArticleContent = () => {
  return (
    <article className="max-w-3xl mx-auto px-4 py-6">
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground leading-relaxed mb-6 text-base md:text-lg">
          With news cycles dominated by reports of failing infrastructure and upcoming weather anomalies, a quiet movement is growing across America. Concerned fathers and families are looking for self-reliance solutions that align with their faith.
        </p>

        <p className="text-foreground leading-relaxed mb-8 text-base md:text-lg">
          It brings to mind the story of Joseph in Egypt—how he prepared for the famine while others ignored the signs. Today, a new guide titled 'Joseph's Well' is making waves in the survival community.
        </p>

        <figure className="my-8 md:my-12">
          <img 
            src={bundleImage} 
            alt="Joseph's Well survival guide bundle showing book and digital formats"
            className="w-full h-auto rounded-sm shadow-lg"
          />
          <figcaption className="text-center text-sm text-muted-foreground mt-4 italic">
            The guide that is challenging modern survival techniques.
          </figcaption>
        </figure>

        <p className="text-foreground leading-relaxed mb-6 text-base md:text-lg">
          Author John Gilmore reveals a method that doesn't rely on the grid, expensive wells, or stockpiling plastic bottles. He calls it a 'God-given plan to pull water from the air... before the seals open.' It creates a nearly endless supply of clean water, providing peace of mind in uncertain times.
        </p>

        <p className="text-foreground leading-relaxed mb-8 text-base md:text-lg font-medium">
          Is this the answer to the predicted 2025 shortages? A detailed video presentation has been released explaining the science and the scripture behind this device. It is currently available to watch for free for a limited time.
        </p>
      </div>
    </article>
  );
};

export default ArticleContent;
