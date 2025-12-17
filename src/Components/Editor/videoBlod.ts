import Quill from "quill";

const BlockEmbed = Quill.import("blots/block/embed") as any;

export class VideoBlot extends BlockEmbed {
  static blotName = "video";
  static tagName = "iframe";

  static create(value: string) {
    const node = super.create() as HTMLIFrameElement;

    const videoId =
      value.includes("youtube")
        ? value.split("v=")[1]?.split("&")[0] || value.split("/").pop()
        : value;

    node.setAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${videoId}`
    );

    node.setAttribute("frameborder", "0");
    node.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    node.setAttribute("allowfullscreen", "true");
    node.setAttribute("width", "100%");
    node.setAttribute("height", "400");

    return node;
  }

  static value(node: HTMLIFrameElement) {
    return node.getAttribute("src") || "";
  }
}

Quill.register(VideoBlot);
