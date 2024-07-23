import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

export class Notification {
  constructor() {}

  public success({ title, text }: { title?: string; text: string }) {
    new Notify({ status: "success", title, text });
  }

  public error({ title, text }: { title?: string; text: string }) {
    new Notify({ status: "error", title, text });
  }
  public info({ title, text }: { title?: string; text: string }) {
    new Notify({ status: "info", title, text });
  }
}
