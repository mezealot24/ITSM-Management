export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container flex flex-col items-center gap-4 py-6 md:h-16 md:flex-row md:py-0">
				<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6">
					<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
						© {new Date().getFullYear()} NYC ITSM. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
