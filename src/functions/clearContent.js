export default function clearContent() {
  const content = document.getElementById('content');
  while (content.children.length > 0) {
    content.children[0].remove();
  }
}
