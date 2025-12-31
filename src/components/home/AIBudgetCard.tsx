export default function AIBudgetCard() {
  return (
    <div className="bg-[#EAF9FF] rounded-2xl p-8 h-full text-center">

      <p className="text-lg font-semibold text-gray-800 leading-snug">
        AI-Powered Dream<br />
        Home Building Budget<br />
        Planning
      </p>

      <img
        src="/ai-home.png"
        className="mx-auto my-6 w-45"
        alt="AI Home"
      />

      <p className="text-xs text-gray-600">
        To Discover , Manage, Evaluate and Transact
      </p>

      <button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg text-sm font-semibold">
        Click Here →
      </button>

    </div>
  );
}
