import z from "zod";

export const msgSchema = z.object({
	firstName: z.string().min(1, "First name should not be empty"),
	lastName: z.string().min(1, "Last name should not be empty"),
	email: z.string().min(1, "Email should not be empty").email(),
	phone: z
		.string()
		.refine((val) => !Number.isNaN(parseInt(val, 10)), {
			message: "Expected number, received a string",
		})
		.min(10, "Phone number should be of 10 digits")
		.max(10, "Phone number should be of 10 digits")
		.optional()
		.or(z.literal("")),
	msg: z.string().min(1, "Message should not empty"),
});

export type MsgSchema = z.infer<typeof msgSchema>;
