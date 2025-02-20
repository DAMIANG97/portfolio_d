import styles from "./TextField.module.scss";

interface TextFieldProps {
  className?: string;
  title?: string;
  description?: string;
}
const TextField: React.FC<TextFieldProps> = ({ className, title, description }) => {
  return (
    <div className={styles[`${className}`]}>
      <h2 className={styles[`text-field__title`]}>{title}</h2>
      <p className={styles[`text-field__description`]}>{description}</p>
    </div>
  );
};

export default TextField;
