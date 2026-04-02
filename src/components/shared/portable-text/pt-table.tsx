"use client";

import type { PtTableBlock, PtTableCell } from "@/types/portable-text";

function renderCell(
  cell: PtTableCell | undefined,
  variant: "th" | "td" = "td",
) {
  if (cell == null) return null;
  if (typeof cell === "string") return cell;
  const text = cell.text;
  if (text == null) return null;
  if (!cell.strong) return text;
  return (
    <strong
      className={`font-montserrat ${
        variant === "th" ? "font-bold" : "font-semibold text-white"
      }`}
    >
      {text}
    </strong>
  );
}

export default function PtTable({ value }: { value: PtTableBlock }) {
  const rows = value.rows ?? [];
  if (!rows.length) return null;

  const headerRow = value.hasHeaderRow ? rows[0] : null;
  const bodyRows = value.hasHeaderRow ? rows.slice(1) : rows;
  const headerHasBottomBorder = Boolean(headerRow && bodyRows.length > 0);

  return (
    <figure className="my-8 w-full text-center">
      {value.caption ? (
        <figcaption className="mb-3 text-[12px] lg:text-[16px] font-montserrat font-light text-white">
          {value.caption}
        </figcaption>
      ) : null}
      <div className="w-full min-w-0 overflow-x-auto">
        <table className="w-full table-fixed border-collapse font-montserrat text-center text-[12px] font-light leading-[150%] lg:text-[14px]">
          {headerRow ? (
            <thead>
              <tr>
                {(headerRow.cells ?? []).map((cell, i) => (
                  <th
                    key={i}
                    scope="col"
                    className={`min-w-0 break-words px-3 py-6.5 text-center font-montserrat font-medium text-white lg:p-5 md:px-4 ${
                      headerHasBottomBorder ? "border-b border-white/10" : ""
                    } ${i > 0 ? "border-l border-white/10" : ""}`}
                  >
                    {renderCell(cell, "th")}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {bodyRows.map((row, ri) => {
              const isFirstBodyRow = ri === 0 && !headerRow;
              const isLastBodyRow = ri === bodyRows.length - 1;
              return (
                <tr key={ri}>
                  {(row.cells ?? []).map((cell, ci) => (
                    <td
                      key={ci}
                      className={`min-w-0 break-words px-3 py-6.5 text-center font-montserrat text-white lg:p-5 md:px-4 ${
                        !isLastBodyRow ? "border-b border-white/10" : ""
                      } ${ci > 0 ? "border-l border-white/10" : ""} ${
                        isFirstBodyRow ? "font-medium" : ""
                      }`}
                    >
                      {renderCell(cell)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
