import { Controller } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";

@Controller("Notification")
export class NotificationsController{
    constructor(private readonly notificationService: NotificationsService){}

    

}