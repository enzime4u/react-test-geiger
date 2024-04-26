type FormFiledsTypes = "text" | "select" | "checkbox";

export type FormProps = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  options?: string[];
  data: {
    type: FormFiledsTypes;
    initialValue: any;
    name: string;
    label: string;
    options: { label: string; value: string }[];
  }[];
};
