export type Block = 
  | { type: "heading"; text: string; align?: "left" | "center" | "right" }
  | { type: "text"; text: string; align?: "left" | "center" | "right" }
  | { type: "image"; src: string; alt: string; className?: string };

  export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    blocks: Block[];
  };

  export const blogPosts: BlogPost[] = [
    {
        slug: "fallout",
        title: "How a hackathon in china changed my life",
        description: "fallout '26",
        blocks: [
            {type: "text", text: "With all odds stacked against me, I still made it, through everything, I still made it", align: "center"}
        ]
    }
  ]