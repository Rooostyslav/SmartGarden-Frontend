import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";

export const SMART_GARDEN_API = new InjectionToken<string>(environment.smartGardenApi);
export const SMART_GARDEN_AUTH_API = new InjectionToken<string>(environment.smartGardenAuthApi);