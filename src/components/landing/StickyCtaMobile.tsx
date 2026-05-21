import { SITE_CONFIG } from '../../constants';
import { Button } from '../ui/Button';

export function StickyCtaMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-gradient-to-t from-background via-background/95 to-transparent md:hidden">
      <Button fullWidth size="lg" href={SITE_CONFIG.checkoutUrl} className="shine-effect">
        {SITE_CONFIG.ctaPrimary}
      </Button>
    </div>
  );
}
