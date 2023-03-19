export let Pie = (props) => {
  //Test dark box ;)
  //props:
  let titulo: string = "Este es un footer";
  let editor: string = "@david.montero.urrutia";
  let fecha: string = "marzo de 2023";
  return `
    <>
      <div className='pie'>
        <h5>${titulo} -  ${editor} - ${fecha}</h5>
      </div>
    </>`;
};
