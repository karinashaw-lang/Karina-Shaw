import { useRoute } from './store';
import { Admin } from './screens/Admin';
import { Join } from './screens/Join';
import { Receipts } from './screens/Receipts';
import { Today } from './screens/Today';
import { You } from './screens/You';
import { BottomNav, Toasts } from './ui/chrome';
import { VerdictOverlay } from './ui/VerdictOverlay';

export function App() {
  const [route, go] = useRoute();
  const join = route.match(/^\/join\/([\w-]+)/);
  const isAdmin = route === '/admin';
  return (
    <div className="grain min-h-screen">
      <Toasts />
      <main className={`mx-auto max-w-md px-4 ${isAdmin ? 'pb-8' : 'pb-28'}`}>
        {join ? <Join code={join[1]} go={go} /> :
          isAdmin ? <Admin /> :
          route === '/receipts' ? <Receipts /> :
          route === '/you' ? <You /> :
          <Today />}
      </main>
      {!isAdmin && !join && <BottomNav route={route} go={go} />}
      {!isAdmin && <VerdictOverlay />}
    </div>
  );
}
