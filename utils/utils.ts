import { Key } from "@/types/types";
import {
  AppWindowMac,
  Battery,
  Camera,
  Cpu,
  HardDrive,
  LucideIcon,
  MemoryStick,
  Microchip,
  Monitor,
  Weight,
} from "lucide-react";

export const iconMap: Record<Key, LucideIcon> = {
  CPU: Cpu,
  RAM: MemoryStick,
  OS: AppWindowMac,
  Storage: HardDrive,
  Display: Monitor,
  Battery: Battery,
  Weight: Weight,
  Camera: Camera,
  GPU: Microchip,
};
