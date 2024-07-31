export interface Email {
  id: string;
  subject: string;
  text: string;
  from: string;
  to: string;
  html: string;
}

import { FormControl } from '@angular/forms';

export interface EmailFormControls {
  subject: FormControl<string | null>;
  text: FormControl<string | null>;
  from: FormControl<string | null>;
  to: FormControl<string | null>;
}
