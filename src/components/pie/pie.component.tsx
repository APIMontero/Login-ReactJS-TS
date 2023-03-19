interface lineaFooter {
  /*
    Gracias!
    uri= https://www.kindacode.com/article/react-typescript-working-with-props-and-types-of-props/

  */
  titulo: string;
  editor: string;
  fecha: string;
}
export let Pie = (props: lineaFooter) => {
  //Test dark box ;)
  //props:

  return (
    <>
      <div className="pie">
        <h5>
          ${props.titulo.toString()} - ${props.editor.toString()} - $
          {props.fecha.toString()}
        </h5>
      </div>
    </>
  );
};
