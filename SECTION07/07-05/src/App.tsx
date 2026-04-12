import GuestView from "./GuestVies";
import UserView from "./UserView";

export default function App() {
  const isLoggedIn = true;
  const components = isLoggedIn ? <UserView /> : <GuestView />;
  return <>{components}</>;
}
