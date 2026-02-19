import { T, Num, Branch, Plural } from "gt-next";

export default function StockStatus({ stock }: { stock: number }) {
  const level = stock === 0 ? "out" : stock <= 3 ? "low" : "available";

  return (
    <Branch
      branch={level}
      out={
        <span className="text-red-400">
          <T>Out of stock</T>
        </span>
      }
      low={
        <span className="text-amber-400">
          <T>
            Only <Num>{stock}</Num> left
          </T>
        </span>
      }
      available={
        <span className="text-green-400">
          <T>
            <Plural
              n={stock}
              singular={
                <>
                  <Num>{stock}</Num> item available
                </>
              }
            >
              <Num>{stock}</Num> items available
            </Plural>
          </T>
        </span>
      }
    >
      <span className="text-neutral-400">
        <T>Check availability</T>
      </span>
    </Branch>
  );
}
