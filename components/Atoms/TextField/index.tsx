import styles from "./TextField.module.scss";

interface TextFieldProps {
  className?: string;
}
const TextField: React.FC<TextFieldProps> = ({ className }) => {
  return (
    <div className={styles[`${className}`]}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat vero praesentium! Similique hic rerum dolor perspiciatis, laboriosam tempora provident magnam? Magnam dolor voluptate veniam dolore rem blanditiis beatae,
      nesciunt consectetur itaque iusto. Sint et suscipit aut dolore nihil hic accusantium quam velit sit aperiam, voluptatibus neque quasi tempore minus similique laborum molestiae? Magnam quisquam placeat voluptatibus nobis sapiente
      tempore. Vel possimus cum voluptate iure veritatis! Odio voluptates, perspiciatis eligendi magnam deleniti quas nisi asperiores blanditiis reiciendis inventore, ea voluptatum quo. Magnam id cumque consectetur velit, odio reiciendis
      inventore a quia dolor soluta, ipsum ut. Veritatis quasi vitae neque minima?
    </div>
  );
};

export default TextField;
