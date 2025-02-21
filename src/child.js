function ChildComponent(pp) {
  const { name, age, name_letter } = pp;
  return (
    <h3>
      이름은 {name} 이고요, 나이는 {age}살입니다. 내 이름의 글자수는
      {name_letter}
    </h3>
  );
}

const Childfunction = () => {
  return <h3>자식2</h3>;
};

export { ChildComponent, Childfunction };
