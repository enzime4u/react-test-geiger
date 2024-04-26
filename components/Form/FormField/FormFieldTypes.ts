interface Option {
  value: string;
  label: string;
}

export interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
  validation?: (val: string) => boolean;
  placeholder?: string;
  options?: Option[];
  checked?: boolean;
}