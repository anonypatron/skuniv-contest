import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signupRequest } from "../../api/authApi";

export const useSignup = () => {
    const router = useNavigate();

    return useMutation({
        mutationFn: signupRequest,
        onSuccess: () => {
            router('/login');
        },
        onError: (err: any) => {
            console.log(err);
        },
    });
};
