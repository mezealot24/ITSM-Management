import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">เข้าสู่ระบบ</CardTitle>
					<CardDescription>ระบบแจ้งขอใช้บริการ IT</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">ชื่อผู้ใช้ :</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">รหัสผ่าน :</Label>
									<a
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										ลืมรหัสผ่าน ?
									</a>
								</div>
								<Input id="password" type="password" required />
							</div>
							<Button type="submit" className="w-full">
								เข้าสู่ระบบ
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
