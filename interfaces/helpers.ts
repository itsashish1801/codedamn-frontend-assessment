import { ReactElement } from 'react';

export interface ClassName {
  className?: string;
}

export interface Children {
  children: ReactElement | ReactElement[];
}

export interface Icon {
  Icon:
    | React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
          title?: string | undefined;
          titleId?: string | undefined;
        } & React.RefAttributes<SVGSVGElement>
      >
    | (() => ReactElement);
}
