import MailPage from "@/app/demo/[name]/blocks/mail/page"
import BlankPage from "@/app/demo/[name]/blocks/blank-page"
import DashboardPage from "@/app/demo/[name]/blocks/dashboard-page"
import StorePage from "@/app/demo/[name]/blocks/store-page"

export const blocks = [
  {
    name: "blank",
    component: BlankPage,
  },
  {
    name: "dashboard",
    component: DashboardPage,
  },
  {
    name: "store",
    component: StorePage,
  },
  {
    name: "mail",
    component: MailPage,
  },
]
