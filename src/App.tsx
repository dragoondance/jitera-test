import { useState, useEffect, useCallback } from 'react';
import { ContainerWrapper } from './component/Container/ContainerStyle';
import { UserCard } from './component/UserCard/UserCard';

const App = () => {
  const [users, setUsers] = useState<any[]>([])

  const fetchUser = useCallback(async() => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());
    const mappedData = response.map((user: any) => ({
      ...user,
      isFav: false,
      isDeleted: false,
    }))
    setUsers(mappedData);
  }, [])

  const setUser = (user: any) => {
    const newUsers = users.map((tempUser: any) => {
      if (user.id === tempUser.id) {
        return user
      } else {
        return tempUser
      }
    })
    setUsers(newUsers)
  }

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <div>
      <ContainerWrapper>
        {
          users && users.length > 0 && users.map((user: any) => {
            if (!user.isDeleted) {
              return (
                <UserCard setUser={setUser} user={user} />
              )
            }
          })
        }
      </ContainerWrapper>
    </div>
  );
}

export default App;
