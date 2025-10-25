import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Sending from "../icons/Sending";
import { type MsgSchema, msgSchema } from "../lib/Types";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<MsgSchema>({
		mode: "onSubmit",
		reValidateMode: "onSubmit",
		resolver: zodResolver(msgSchema),
	});

	const [isSent, setIsSent] = useState<null | boolean>(null);
	const onSubmit = async (data: MsgSchema) => {
		try {
			const res = await fetch(
				"https://h8qp0bccz7.execute-api.ap-south-1.amazonaws.com/send",
				{
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
					},
				},
			);

			if (!res.ok) {
				setIsSent(false);
			} else {
				setIsSent(true);
				reset();
			}
		} catch {
			setIsSent(false);
		}
	};

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key="ContactPage"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="flex flex-col mt-55 items-center justify-center"
			>
				<h1 className="text-6xl underline font-bold">Contact</h1>

				<div className="mt-6">
					<div className="tip-box" role="alert">
						<span className="font-medium">Tip!</span> Kindly avoid using global
						autofill 🙏
					</div>

					{isSent === false && (
						<div className="alert-box" role="alert">
							<span className="font-medium">Danger alert!</span> Cannot complete
							request. Try again later!
						</div>
					)}
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col p-20 pt-0 items-center "
				>
					<div className="grid md:grid-cols-2 gap-6 gap-y-0">
						<div className="flex flex-col gap-2 p-5">
							<label htmlFor="FirstName" className="block text-sm font-bold">
								First name
							</label>
							{errors.firstName && (
								<div className="alert-box" role="alert">
									<span className="font-medium">Danger alert!</span>{" "}
									{`${errors.firstName.message}`}
								</div>
							)}
							<input
								id="FirstName"
								{...register("firstName")}
								type="text"
								className="form-input "
								placeholder="John"
							/>
						</div>

						<div className="flex flex-col gap-2 p-5">
							<label htmlFor="LastName" className="block text-sm font-bold">
								Last name
							</label>
							{errors.lastName && (
								<div className="alert-box" role="alert">
									<span className="font-medium">Danger alert!</span>{" "}
									{`${errors.lastName.message}`}
								</div>
							)}
							<input
								id="LastName"
								{...register("lastName")}
								type="text"
								className="form-input "
								placeholder="Doe"
							/>
						</div>

						<div className="flex flex-col gap-2 p-5">
							<label htmlFor="Email" className="block text-sm font-bold">
								Email
							</label>
							{errors.email && (
								<div className="alert-box" role="alert">
									<span className="font-medium">Danger alert!</span>{" "}
									{`${errors.email.message}`}
								</div>
							)}
							<input
								id="Email"
								{...register("email")}
								type="email"
								className="form-input "
								placeholder="johndoe@company.com"
							/>
						</div>

						<div className="flex flex-col gap-2 p-5">
							<label htmlFor="Phone" className="block text-sm font-bold">
								Phone number
							</label>
							{errors.phone && (
								<div className="alert-box" role="alert">
									<span className="font-medium">Danger alert!</span>{" "}
									{`${errors.phone.message}`}
								</div>
							)}
							<input
								id="Phone"
								{...register("phone")}
								type="tel"
								onWheel={(event) => {
									(event.target as HTMLElement).blur();
								}}
								className="form-input "
								placeholder="1234567890"
							/>
						</div>
						<div className="flex flex-col gap-2 p-5 md:col-span-2">
							<label
								htmlFor="Message"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your message
							</label>
							{errors.msg && (
								<div className="alert-box" role="alert">
									<span className="font-medium">Danger alert!</span>{" "}
									{`${errors.msg.message}`}
								</div>
							)}
							<textarea
								id="Message"
								{...register("msg")}
								rows={4}
								className="form-input "
								placeholder="Write your message here..."
							></textarea>
						</div>
					</div>
					<button
						type="submit"
						disabled={isSubmitting}
						className="glass-button font-bold px-3.5  py-2  rounded-full overflow-hidden text-sm cursor-pointer"
					>
						{isSubmitting ? (
							<div className="flex relative pl-8">
								<div className="-top-6.5 -left-13 w-35 absolute">
									<Sending />
								</div>
								Submitting...
							</div>
						) : (
							"Submit"
						)}
					</button>
				</form>
			</motion.div>
		</AnimatePresence>
	);
};

export default Contact;
