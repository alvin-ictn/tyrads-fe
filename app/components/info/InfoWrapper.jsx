import styles from "./css/InfoWrapper.module.css";

export default function InfoWrapper({ children }) {
  return <div className="p-6 flex flex-col gap-8 border border-black rounded-2xl">{children}</div>;
}
