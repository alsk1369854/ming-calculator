import { AccountingFormatter } from "./interfaces/AccountingFormatter";

class FormatterUtils {
  public getAccountingFormatter(): AccountingFormatter {
    const format = new Intl.NumberFormat("zh-tw", { maximumFractionDigits: 2 });

    return {
      formatter: (value: number): string => {
        return format.format(value);
      },
      parser: (value: string): number => {
        return +value.replace(/,/g, "");
      },
    };
  }
}

export const formatterUtils = new FormatterUtils();
