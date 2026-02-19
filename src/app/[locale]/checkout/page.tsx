import { T, Currency } from "gt-next";
import { tx } from "gt-next/server";
import Link from "next/link";

export default async function CheckoutPage() {
  const shippingNote = await tx(
    "Free standard shipping on all orders. Express shipping available at checkout."
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold text-neutral-100 mb-3">
        <T>Checkout</T>
      </h1>
      <p className="text-sm text-neutral-400 mb-10">{shippingNote}</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">
            <T>Shipping address</T>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-neutral-500 mb-1.5">
                <T>First name</T>
              </label>
              <input
                type="text"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600"
              />
            </div>
            <div>
              <label className="block text-xs text-neutral-500 mb-1.5">
                <T>Last name</T>
              </label>
              <input
                type="text"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-neutral-500 mb-1.5">
                <T>Address</T>
              </label>
              <input
                type="text"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600"
              />
            </div>
            <div>
              <label className="block text-xs text-neutral-500 mb-1.5">
                <T>City</T>
              </label>
              <input
                type="text"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600"
              />
            </div>
            <div>
              <label className="block text-xs text-neutral-500 mb-1.5">
                <T>Postal code</T>
              </label>
              <input
                type="text"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">
            <T>Order summary</T>
          </h2>
          <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-950 space-y-3">
            <div className="flex justify-between text-sm text-neutral-400">
              <span><T>Subtotal</T></span>
              <span><Currency currency="USD">{475.97}</Currency></span>
            </div>
            <div className="flex justify-between text-sm text-neutral-400">
              <span><T>Shipping</T></span>
              <span><T>Free</T></span>
            </div>
            <div className="border-t border-neutral-800 pt-3 flex justify-between text-base font-semibold text-neutral-100">
              <span><T>Total</T></span>
              <span><Currency currency="USD">{475.97}</Currency></span>
            </div>
          </div>
        </section>

        <div className="flex gap-4">
          <Link
            href="/cart"
            className="px-6 py-3 rounded-lg text-sm font-medium border border-neutral-700 text-neutral-300 hover:border-neutral-500 transition-colors"
          >
            <T>Back to cart</T>
          </Link>
          <button className="px-6 py-3 rounded-lg text-sm font-medium bg-white text-neutral-950 hover:bg-neutral-200 transition-colors">
            <T>Place order</T>
          </button>
        </div>
      </div>
    </main>
  );
}
