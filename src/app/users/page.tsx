"use client"
import React from 'react'
import MyCard from '../../components/cui/MyCard';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {  getUserData, postUser } from '../../../api/user';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
type IUser = {
  email: string;
  password: string;
}

const formSchema = z.object({
  email: z.string().email(),
  password: z.string()
})


function user() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ''
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values)
    console.log(values)
  }

  const queryClient = useQueryClient()
  const query = useQuery({ queryKey: ['todos'], queryFn: async() => {
    return await getUserData()
  }})

  const mutation = useMutation({
    mutationFn: async(user:IUser) => {
      return  postUser(user)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  if (query.isLoading) {
    return (
      <div>Loading...</div>
    )
  }


  return (
    <div>
      <div className='px-6 py-5'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <h1 className='text-4xl text-gray-900 text-center'>User </h1>
        <div className='grid grid-cols-3 gap-2'>
          {
            query.data?.map((user: IUser) => <MyCard email={user.email} password={user.password}></MyCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default user