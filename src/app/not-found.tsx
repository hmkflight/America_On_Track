import { Reader, Action } from "@/components/reader";
export default function NotFound() {
  return (
    <Reader
      label="404 / Not found"
      title="A different starting point."
      summary="We couldn’t find that page."
    >
      <p className="lead">There’s still plenty to explore.</p>
      <Action href="/">See the whole picture</Action>
      <Action href="/programs" secondary>
        Find a program
      </Action>
    </Reader>
  );
}
