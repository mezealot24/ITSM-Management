"use client";

import * as React from "react";
import {
	LaptopMinimal,
	BookOpen,
	Bot,
	FolderCode,
	Frame,
	ChartNoAxesGantt,
	Map,
	PieChart,
	Settings2,
	CircuitBoard,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";

const data = {
	user: {
		name: "IT-NYC",
		email: "Support@nycthai.com",
		avatar: "",
	},
	teams: [
		{
			name: "Manager",
			logo: ChartNoAxesGantt,
			plan: "Basic",
		},
		{
			name: "Developer",
			logo: FolderCode,
			plan: "Pro",
		},
		{
			name: "Support",
			logo: CircuitBoard,
			plan: "Enterprise",
		},
	],
	navMain: [
		{
			title: "User Management",
			url: "#",
			icon: Bot,
			isActive: true,
			items: [
				{
					title: "รายชื่อพนักงาน",
					url: "#/se_users",
				},
				{
					title: "ลงทะเบียนใช้งานระบบ",
					url: "#/register_sys",
				},
				{
					title: "ประวัติการใช้งานระบบ",
					url: "#/history_sys",
				},
			],
		},
		{
			title: "Asset Management",
			url: "#",
			icon: LaptopMinimal,
			items: [
				{
					title: "Genesis",
					url: "#",
				},
				{
					title: "Explorer",
					url: "#",
				},
				{
					title: "Quantum",
					url: "#",
				},
			],
		},
		{
			title: "Documentation",
			url: "#",
			icon: BookOpen,
			items: [
				{
					title: "Introduction",
					url: "#",
				},
				{
					title: "Get Started",
					url: "#",
				},
				{
					title: "Tutorials",
					url: "#",
				},
				{
					title: "Changelog",
					url: "#",
				},
			],
		},
		{
			title: "Settings",
			url: "#",
			icon: Settings2,
			items: [
				{
					title: "General",
					url: "#",
				},
				{
					title: "Team",
					url: "#",
				},
				{
					title: "Billing",
					url: "#",
				},
				{
					title: "Limits",
					url: "#",
				},
			],
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: Frame,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Travel",
			url: "#",
			icon: Map,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
