export type Task = {
  id: number;
  title: string;
  done: boolean;
};

export const initialState: Task[] = [
  {
    id: 4,
    title: '読書',
    done: false,
  },
  {
    id: 3,
    title: '勉強',
    done: false,
  },
  {
    id: 2,
    title: 'お風呂掃除',
    done: false,
  },
  {
    id: 1,
    title: '買い物',
    done: true,
  },
];
