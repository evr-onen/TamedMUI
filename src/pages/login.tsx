// ** React/Next Core
import { redirect } from "next/navigation"

// ** Context
import { useGlobalContext } from "src/contexts"

// ** MUI imports
import { Button, FormControl, FormHelperText, Grid, TextField, Typography } from "@mui/material"
import { useTheme } from "@mui/material"

// ** Third Party Imports
import * as yup from "yup"
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Axios from "axios"
import jwt_decode from "jwt-decode"

// NOTE - YUP Schema
const schema = yup.object().shape({
  email: yup.string().required("Username Required"),
  password: yup.string().required("Password Required"),
})
const schemaReg = yup.object().shape({
  name: yup.string().required("Name Required"),
  surname: yup.string().required("Surname is required"),
  email: yup.string().required("Email is required"),
  regPassword: yup.string().required("Password is required"),
  password_confirmation: yup.string().oneOf([yup.ref("regPassword"), null], "Passwords must match"),
})
// ** Types
import { DecodedType } from "@/types/response"
type LoginDataType = {
  email: string
  password: string
}
type RegisterDataType = {
  name: string
  surname: string
  email: string
  password: string
  password_confirmation: string
}
type RegisterSubmitDataType = {
  name: string
  surname: string
  email: string
  regPassword: string
  password_confirmation: string
}
type ResponseDataType = {
  [key: string]: { [key: string]: string }
}

const LoginRegister = () => {
  const theme = useTheme()
  const { setUser } = useGlobalContext()

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  })

  const {
    reset: regReset,
    control: regControl,
    handleSubmit: regHandlerSubmit,

    formState: { errors: regErrors },
    register: handleSubmitReg,
  } = useForm({
    resolver: yupResolver(schemaReg),
    defaultValues: { name: "", surname: "", email: "", regPassword: "", password_confirmation: "" },
    mode: "onChange",
  })

  // ** Funcs
  const loginAccount = async (data: LoginDataType) => {
    const responseData = (await Axios.post("http://127.0.0.1:8000/api/auth/login", data)) as ResponseDataType
    console.log(responseData)
    setLocalStorageToken(responseData?.data?.access_token)
    const decoded: DecodedType = jwt_decode(responseData?.data?.access_token)
    // console.log(decoded as keyof typeof decoded)
    setUser({ name: decoded.name, surname: decoded.surn, userRole: decoded.role, storeId: decoded.stor, token: responseData?.data?.access_token })
    // redirect("/home")
  }
  const setLocalStorageToken = (token: string) => {
    localStorage.setItem("user", token)
  }

  const registerAccount = (data: RegisterDataType) => {
    const responseData = Axios.post("http://127.0.0.1:8000/api/auth/register", data).then(() => {
      console.log(responseData)
      redirect("/home")
    })
  }

  const submitHandler = (data: LoginDataType) => {
    console.log(data)
    loginAccount({ email: data.email, password: data.password })
  }

  const registrationHandler = (data: RegisterSubmitDataType) => {
    console.log(data)
    registerAccount({
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.regPassword,
      password_confirmation: data.password_confirmation,
    })
  }

  return (
    <Grid container className="home" width="1370px" justifyContent="center" mx="auto">
      <Grid item xs={12} px="2rem">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" fontWeight="bold" color="initial">
              Login / Registration
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <form onSubmit={handleSubmit(submitHandler)}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h5" fontWeight="bold" textTransform="capitalize">
                    Login
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Controller
                      control={control}
                      name="email"
                      shouldUnregister={false}
                      render={({ field, fieldState }) => (
                        <TextField
                          variant="standard"
                          autoComplete="off"
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          label="E-mail"
                          fullWidth
                          error={!!fieldState.error}
                        />
                      )}
                    />

                    {errors.email && <FormHelperText error>{errors.email?.message}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Controller
                      control={control}
                      name="password"
                      shouldUnregister={false}
                      render={({ field, fieldState }) => (
                        <TextField
                          variant="standard"
                          autoComplete="off"
                          type="password"
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          label="Password"
                          fullWidth
                          error={!!fieldState.error}
                        />
                      )}
                    />

                    {errors.password && <FormHelperText error>{errors.password?.message}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit" fullWidth>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={6}>
            <form onSubmit={regHandlerSubmit(registrationHandler)}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h5" fontWeight="bold" textTransform="capitalize">
                    Registration
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Controller
                      control={regControl}
                      name="name"
                      render={({ field, fieldState }) => (
                        <TextField
                          variant="standard"
                          autoComplete="off"
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          label="Name"
                          fullWidth
                          error={!!fieldState.error}
                        />
                      )}
                    />

                    {regErrors.name && <FormHelperText error>{regErrors.name?.message}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Controller
                      control={regControl}
                      name="surname"
                      shouldUnregister={false}
                      render={({ field, fieldState }) => (
                        <TextField
                          variant="standard"
                          autoComplete="off"
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          label="Surname"
                          fullWidth
                          error={!!fieldState.error}
                        />
                      )}
                    />

                    {regErrors.surname && <FormHelperText error>{regErrors.surname?.message}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Controller
                      control={regControl}
                      name="email"
                      shouldUnregister={false}
                      render={({ field, fieldState }) => (
                        <TextField
                          variant="standard"
                          autoComplete="off"
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          label="E-mail"
                          fullWidth
                          error={!!fieldState.error}
                        />
                      )}
                    />

                    {regErrors.email && <FormHelperText error>{regErrors.email?.message}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Controller
                      control={regControl}
                      name="regPassword"
                      shouldUnregister={false}
                      render={({ field, fieldState }) => (
                        <TextField
                          variant="standard"
                          autoComplete="off"
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          label="Password"
                          fullWidth
                          error={!!fieldState.error}
                        />
                      )}
                    />

                    {regErrors.regPassword && <FormHelperText error>{regErrors.regPassword?.message}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Controller
                      control={regControl}
                      name="password_confirmation"
                      shouldUnregister={false}
                      render={({ field, fieldState }) => (
                        <TextField
                          variant="standard"
                          type="password"
                          autoComplete="off"
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          label="Verify Password"
                          fullWidth
                          error={!!fieldState.error}
                        />
                      )}
                    />

                    {regErrors.password_confirmation && <FormHelperText error>{regErrors.password_confirmation?.message}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit" fullWidth>
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default LoginRegister
