export default function HTMLEscape() {
  const bTags = "<b>bold</b>";
  const strongTags = "<strong>strong</strong>";

  return <strong className="">It's a strong Tag</strong>;
  // return <p dangerouslySetInnerHTML={{ __html: strongTags }}></p>;

  // return <b className="">It's a b Tag</b>;
  // return <p className="" dangerouslySetInnerHTML={{ __html: bTags }}></p>;
}
