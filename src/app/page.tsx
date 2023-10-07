'use client'

import { useForm, SubmitHandler } from "react-hook-form"

type myFormData = {
  firstName: string;
  lastName: string;
  category: string;
}


export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<myFormData>()
  const onSubmit: SubmitHandler<myFormData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder="名前" />
      {errors.firstName && <div>名前を入力してください</div>}
      <input {...register('lastName', { required: true })} placeholder="名字" />
      {errors.lastName && <div>名字を入力してください</div>}
      <select {...register('category', { required: true })}>
        <option value="">選択...</option>
        <option value="A">カテゴリーA</option>
        <option value="B">カテゴリーB</option>
      </select>
      {errors.category && <div>カテゴリーを選択してください</div>}
      <input type="submit" />
    </form>
  )
}
