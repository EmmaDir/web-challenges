import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  onAllOff,
  onAllOn,
  lights,
  allLightsOff,
  allLightsOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onAllOff={onAllOff}
        onAllOn={onAllOn}
        lights={lights}
        allLightsOff={allLightsOff}
        allLightsOn={allLightsOn}
      />
    </>
  );
}
