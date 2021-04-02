declare namespace JSX{
    interface HTMLAttributes{
        children?:any;
        ref?:any;
    }
    interface ElementClass extends Rax.Component<any> {
        render(): Rax.RaxNode;
        refs?:any;
        context?:any;
    }
    
}