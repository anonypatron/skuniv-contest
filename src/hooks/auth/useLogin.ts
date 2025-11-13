import { useMutation } from "@tanstack/react-query";
import { loginRequest } from '../../api/authApi';
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const router = useNavigate();

    return useMutation({
        mutationFn: loginRequest,
        onSuccess: () => {
            router('/home');
        },
        onError: (err: any) => {
            console.error(err);
        },
    });
};
