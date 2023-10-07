'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import ContentLoader from 'react-content-loader'

type myFormData = {
  firstName: string;
  lastName: string;
  category: string;
}

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<myFormData>();

  const onSubmit: SubmitHandler<myFormData> = (data) => {
    console.log(data)
  }

  return (
    <div>
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
      <ContentLoader>
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70"></rect>
        {/* 他のローディングプレースホルダーの要素を追加 */}
      </ContentLoader>
    </div>
  )
}
