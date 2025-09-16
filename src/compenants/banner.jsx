import { StickyBanner } from "../compenants/ui/sticky-banner";

export default function StickyBannerDemo() {
  return (
    <div className="relative flex h-auto w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mx-0 mr-6 max-w-[90%] text-white  drop-shadow-md">
          IGENERGY is Now the official Ambassador of Huawei at ENSTTIC 🎉  
          
          
        </p>
      </StickyBanner>
      
    </div>
  );
}


