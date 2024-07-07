import { QrCode as TQrCode } from "../api/qrCode/QrCode";

export const QRCODE_TITLE_FIELD = "id";

export const QrCodeTitle = (record: TQrCode): string => {
  return record.id?.toString() || String(record.id);
};
