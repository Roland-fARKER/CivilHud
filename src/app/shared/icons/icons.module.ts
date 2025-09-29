import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  User,
  Search,
  Home,
  Lock,
  Mail,
  Shield,
  SquarePen,
  Pencil,
  Save,
  X,
  Calendar,
  AlertTriangle,
  CircleAlert,
} from 'lucide-angular';

const icons = {
  User,
  Search,
  Home,
  Lock,
  Mail,
  Shield,
  SquarePen,
  Pencil,
  Save,
  X,
  Calendar,
  CircleAlert
};

@NgModule({
  declarations: [],
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule],
})
export class IconsModule {}