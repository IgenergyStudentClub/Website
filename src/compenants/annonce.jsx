export default function Annonce() {
    return(
        <div>
            {/* Announcement Banner */}
<div id="ab-full-width-with-dismiss-button-on-blue-bg" className="hs-removing:-translate-y-full bg-blue-600">
  <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <div className="flex">
      <p className="text-white">
        <strong>IGENERGY</strong> is the <strong>Huawei</strong> ambassador at ENSTTIC </p>      
        <a className="decoration-2 underline font-medium hover:text-white/80 pl-7 lg:pl-0 focus:outline-hidden text-white/80" href="../figma.html">Learn more</a>
      

      <div className="ps-3 ms-auto">
        <button type="button" className="inline-flex rounded-lg p-1.5 text-white/80 hover:bg-white/10 focus:outline-hidden focus:bg-white/10" data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg">
          <span className="sr-only">Dismiss</span>
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
  </div>
</div>
{/* End Announcement Banner */}

        </div>
    )
};