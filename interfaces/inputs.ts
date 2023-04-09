export interface Input extends Label {
  placeholder: string;
  error: string;
}

export interface Label {
  label: string;
}

export interface SelectInput extends Label {
  options: string[];
  placeholder: string;
}

export interface VisibilityToggler extends Label {
  title: string;
  description: string;
}
